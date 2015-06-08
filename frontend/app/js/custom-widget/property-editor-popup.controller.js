/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
angular.module('pb.custom-widget').controller('PropertyEditorPopupCtrl', function($scope, param, $modalInstance, $timeout) {

  'use strict';

  $scope.paramToUpdate = param;

  /**
   * All types available for the properties
   * @type {Array}
   */
  $scope.types = ['text', 'choice', 'html', 'integer', 'boolean', 'collection'];

  // default type is text
  $scope.currentParam = $scope.paramToUpdate ? angular.copy(param) : {type: 'text'};

  $scope.ok = function() {
    $modalInstance.close({param: $scope.currentParam, paramToUpdate: $scope.paramToUpdate});
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  // Delay autofocus once modal is fully appeared
  // FIX IE bug on focus position
  $scope.animationFinished = false;
  $timeout(function() {
    $scope.animationFinished = true;
  }, 300);

});
