import { posts } from './posts.js';

describe('Endpoints', ()=> {
  describe('Posts', () => {
    let res;
    let next;

    beforeEach(() => {
      next = jest.fn();
      res = {
        status: jest.fn().mockReturnThis(),
        sendStatus: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
      };
    });

    it('it should be ok', async () => {
      // lo que devuelve el get en axios
      const mockUsers = [{'id': 1}, {'id': 2},];

      // data que será enviada en el post
      const postBody = {
        'userId': 1,
        'id': 1,
        'title': 'titulo',
        'body': 'cuerpo del post',
      };

      // objecto req con el parametro
      const req = {
        body: postBody
      };

      //mock de axios con los datos que seran devueltos
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: {id: 1000} }),
      };

      // hacemos la llamada al recurso post
      await posts({ axios }).post(req, res, next);

      // verificamos que haya devuelto un 201
      expect(res.status.mock.calls).toEqual([[201]]);
      // console.log(res.status.mock.calls);

      // verificamos que el resultado del método devuelva este objeto
      expect(res.json.mock.calls).toEqual([[{'data': { 'id': 1000 }}]]);
      // console.log(res.json.mock.calls);

      // verificamos que axios haya sido llamado con la url en el get
      expect(axios.get.mock.calls).toEqual([[ 'https://jsonplaceholder.typicode.com/users' ]]);
      // console.log(axios.get.mock.calls);

      // verificamos que axios haya sido llamado con la url y postBody en el post
      expect(axios.post.mock.calls).toEqual([[ 'https://jsonplaceholder.typicode.com/posts/', postBody ]]);
      // console.log(axios.post.mock.calls);
    });

    it('it should NOT be ok', async () => {
      // lo que devuelve el get en axios
      const mockUsers = [{'id': 1}, {'id': 2},];

      // data que será enviada en el post
      const postBody = {
        'userId': 3,
        'id': 3,
        'title': 'titulo',
        'body': 'cuerpo del post',
      };

      // objecto req con el parametro
      const req = {
        body: postBody
      };

      //mock de axios con los datos que seran devueltos
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: {id: 1000} }),
      };

      // hacemos la llamada al recurso post
      await posts({ axios }).post(req, res, next);

      expect(axios.post.mock.calls).toEqual([]);
      expect(res.sendStatus.mock.calls).toEqual([[400]]);
    });
  });
});
