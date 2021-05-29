// para hacer test de integracion
import request from 'supertest';
import { app } from '../../app.js';

describe('Server', () => {
  describe('Endpoints', () => {
    describe('Post POST', () => {
      // data que será enviada en el post
      let postBody = {
        'userId': 3,
        'id': 3,
        'title': 'titulo',
        'body': 'cuerpo del post',
      };

      it('create a new post ', async() => {
        const response = await request(app)
                                .post('/')
                                .send(postBody)
                                .set('userId', 1)
                                .set('Content-Type', 'application/json');

        expect(response.statusCode).toEqual(201);
        expect(response.body).toEqual({data: { userId: 3, id: 101, title: 'titulo', body: 'cuerpo del post' }});
        expect(response.body.data).toHaveProperty('id');

        // console.log(response);
      });

      it('should not create a new post ', async() => {
        postBody.userId = 100;
        postBody.id = 100;

        const response = await request(app)
                                .post('/')
                                .send(postBody)
                                .set('userId', 1)
                                .set('Content-Type', 'application/json');

        expect(response.statusCode).toEqual(400);
      });


    });
  });
});
