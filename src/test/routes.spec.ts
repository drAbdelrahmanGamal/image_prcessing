import supertest from 'supertest';
import app from '../app';

describe('Test app endpoints', (): void => {
  describe('Test main route endpoint', (): void => {
    it('should return 200 on /', (done): void => {
      supertest(app)
        .get('/')
        .expect(200)
        .end((err: Error) => {
          if (err) done.fail(err);
          else done();
        });
    });
  });

  describe('Test images route endpoints', (): void => {
    it('should return 200 on /images', (done): void => {
      supertest(app)
        .get('/images')
        .expect(200)
        .end((err: Error) => {
          if (err) done.fail(err);
          else done();
        });
    });

    describe('Test images/resize route endpoint', (): void => {
      it('should return 400 on /images/resize', (done): void => {
        supertest(app)
          .get('/images/resize')
          .expect(400)
          .end((err: Error) => {
            if (err) done.fail(err);
            else done();
          });
      });

      it('should return 400 on /images/resize/?w=400&h=400', (done): void => {
        supertest(app)
          .get('/images/resize/?w=400&h=400')
          .expect(400)
          .end((err: Error) => {
            if (err) done.fail(err);
            else done();
          });
      });

      it('should return 200 on /images/resize/?i=01.png&w=400&h=400', (done): void => {
        supertest(app)
          .get('/images/resize/?i=01.png&w=400&h=400')
          .expect(200)
          .end((err: Error) => {
            if (err) done.fail(err);
            else done();
          });
      });
    });
  });
});