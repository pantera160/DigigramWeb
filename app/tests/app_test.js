/**
 * Created by Pantera on 01/12/15.
 */
'use strict';

describe('USGDigigram module', function () {

    var restService;

    beforeEach(module('USGDigigram'));

    beforeEach(inject(function (_DataRESTService_) {
        restService = _DataRESTService_;
    }));

    it('Correct URL used for calls', function () {
        restService.initialise().then(function(response){
           expect(response.data.application.RESTUrl).toEqual("localhost:8080/data/");
        });
    });
});