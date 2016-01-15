import {expect} from 'chai';
import sinon from 'sinon';

describe('sinon tests', () => {

  let student, schedule;

  beforeEach(() => {
    student = {
      dropClass(classId, cb){
        if(!!cb.dropClass){
          cb.dropClass();
        } else {
          cb();
        }
      }
    };

    schedule = {
      dropClass(){
        console.log('Class droped');
      }
    };
  })

  describe('student with stubs', () => {

    it('should call a stubbed method', () => {

      let stub = sinon.stub(schedule);

      student.dropClass(1, stub.dropClass);
      expect(stub.dropClass.called).be.true;
    })
  })

});
