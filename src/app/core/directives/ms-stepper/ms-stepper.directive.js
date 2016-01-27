(function ()
{
    'use strict';

    angular
        .module('app.core')
        .controller('MsStepperController', MsStepperController)
        .directive('msStepper', msStepperDirective)
        .directive('msStepperStep', msStepperStepDirective)
        .directive('msStepperForm', msStepperFormDirective);

    /** @ngInject */
    function MsStepperController($scope)
    {
        var vm = this;

        // Data
        vm.mainForm = undefined;

        vm.steps = [];
        vm.currentStep = undefined;
        vm.currentStepNumber = 1;

        // Methods
        vm.registerMainForm = registerMainForm;
        vm.registerStep = registerStep;
        vm.setupSteps = setupSteps;

        vm.setCurrentStep = setCurrentStep;

        vm.gotoStep = gotoStep;
        vm.gotoPreviousStep = gotoPreviousStep;
        vm.gotoNextStep = gotoNextStep;
        vm.gotoFirstStep = gotoFirstStep;
        vm.gotoLastStep = gotoLastStep;

        vm.isFirstStep = isFirstStep;
        vm.isLastStep = isLastStep;

        vm.isStepCurrent = isStepCurrent;
        vm.isStepDisabled = isStepDisabled;
        vm.isStepOptional = isStepOptional;
        vm.isStepValid = isStepValid;

        vm.isFormValid = isFormValid;

        //////////

        /**
         * Register the main form
         *
         * @param form
         */
        function registerMainForm(form)
        {
            vm.mainForm = form;
        }

        /**
         * Register a step
         *
         * @param element
         * @param scope
         * @param form
         */
        function registerStep(element, scope, form)
        {
            var step = {
                element   : element,
                scope     : scope,
                form      : form,
                stepNumber: scope.step || (vm.steps.length + 1),
                stepTitle : scope.stepTitle
            };

            // Push the step into steps array
            vm.steps.push(step);

            // Sort steps by stepNumber
            vm.steps.sort(function (a, b)
            {
                return a.stepNumber - b.stepNumber;
            });
        }

        /**
         * Setup steps for the first time
         */
        function setupSteps()
        {
            vm.setCurrentStep(vm.currentStepNumber);
        }

        /**
         * Set current step
         *
         * @param stepNumber
         */
        function setCurrentStep(stepNumber)
        {
            if ( stepNumber < 1 || stepNumber > vm.steps.length )
            {
                return;
            }

            // Update the current step number
            vm.currentStepNumber = stepNumber;

            // Hide all steps
            for ( var i = 0; i < vm.steps.length; i++ )
            {
                vm.steps[i].element.hide();
            }

            // Show the current step
            vm.steps[vm.currentStepNumber - 1].element.show();
        }

        /**
         * Go to a step
         *
         * @param stepNumber
         */
        function gotoStep(stepNumber)
        {
            vm.setCurrentStep(stepNumber);
        }

        /**
         * Go to the previous step
         */
        function gotoPreviousStep()
        {
            vm.setCurrentStep(vm.currentStepNumber - 1);
        }

        /**
         * Go to the next step
         */
        function gotoNextStep()
        {
            vm.setCurrentStep(vm.currentStepNumber + 1);
        }

        /**
         * Go to the first step
         */
        function gotoFirstStep()
        {
            vm.setCurrentStep(1);
        }

        /**
         * Go to the last step
         */
        function gotoLastStep()
        {
            vm.setCurrentStep(vm.steps.length);
        }

        /**
         * Check if the current step is the first step
         *
         * @returns {boolean}
         */
        function isFirstStep()
        {
            return vm.currentStepNumber === 1;
        }

        /**
         * Check if the current step is the last step
         *
         * @returns {boolean}
         */
        function isLastStep()
        {
            return vm.currentStepNumber === vm.steps.length;
        }

        /**
         * Check if the given step is the current one
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepCurrent(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( stepNumber < 1 || stepNumber > vm.steps.length )
            {
                return null;
            }

            return vm.currentStepNumber === stepNumber;
        }

        /**
         * Check if the given step should be disabled
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepDisabled(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( stepNumber < 1 || stepNumber > vm.steps.length )
            {
                return null;
            }

            var disabled = false;

            for ( var i = 1; i < stepNumber; i++ )
            {
                if ( !isStepValid(i) )
                {
                    disabled = true;
                    break;
                }
            }

            return disabled;
        }

        /**
         * Check if the given step is optional
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepOptional(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( stepNumber < 1 || stepNumber > vm.steps.length )
            {
                return null;
            }

            return vm.steps[stepNumber - 1].scope.optionalStep;
        }

        /**
         * Check if the given step is valid
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepValid(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( stepNumber < 1 || stepNumber > vm.steps.length )
            {
                return null;
            }

            // If the step is optional, always return true
            if ( isStepOptional(stepNumber) )
            {
                return true;
            }

            return vm.steps[stepNumber - 1].form.$valid;
        }

        /**
         * Check if the entire form is valid
         *
         * @returns {boolean}
         */
        function isFormValid()
        {
            return vm.mainForm.$valid;
        }
    }

    /** @ngInject */
    function msStepperDirective()
    {
        return {
            restrict        : 'A',
            require         : ['form', 'msStepper'],
            priority        : 1001,
            controller      : 'MsStepperController as MsStepper',
            bindToController: {
                model: '=ngModel'
            },
            transclude      : true,
            templateUrl     : 'app/core/directives/ms-stepper/templates/horizontal/horizontal.html',
            compile         : function (tElement)
            {
                tElement.addClass('ms-stepper');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    console.warn('msStepper');

                    MsStepperCtrl.registerMainForm(FormCtrl);
                    MsStepperCtrl.setupSteps();
                };
            }
        }
    }

    /** @ngInject */
    function msStepperStepDirective()
    {
        return {
            restrict: 'E',
            require : ['form', '^msStepper'],
            priority: 1000,
            scope   : {
                step        : '=?',
                stepTitle   : '=?',
                optionalStep: '=?'
            },
            compile : function (tElement)
            {
                tElement.addClass('ms-stepper-step');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    scope.optionalStep = angular.isDefined(iAttrs.optionalStep);

                    console.log(scope);

                    console.warn('msStepperStep');

                    iElement.hide();

                    MsStepperCtrl.registerStep(iElement, scope, FormCtrl);
                };
            }
        }
    }

    /** @ngInject */
    function msStepperFormDirective()
    {
        return {
            restrict: 'A',
            require : ['form', '^msStepper'],
            compile : function (tElement)
            {
                tElement.addClass('ms-stepper-form');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var formCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    //MsStepperCtrl.registerForm(formCtrl);
                }
            }
        }
    }

})();