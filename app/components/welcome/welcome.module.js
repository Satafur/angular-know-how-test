/**
 * Created by Esleider Tafur on 7/07/17.
 */

(function (angular)
{
    'use strict';

    angular
        .module('angularKHTest.welcome', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {

        $stateProvider.state('app.welcome', {
            url    : '/welcome',
            views  : {
                'content@app': {
                    templateUrl: 'components/welcome/welcome.html'
                }
            }
        });

    }

})(window.angular);