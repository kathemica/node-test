import { users } from './users.js';

describe('Endpoints', ()=> {
    describe('Users', () => {   
        let res;

        beforeEach(() => {
            res = {
                status: jest.fn().mockReturnThis(),
                sendStatus: jest.fn().mockReturnThis(),
                send: jest.fn(),
                json: jest.fn()
            };
        });     

        describe('get', () => {
            it('return to user json ', async () => {
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1}),
                };                

                await users({ axios }).get({}, res);
                expect(res.status.mock.calls).toEqual([[200]]);
                
                expect(res.json.mock.calls).toEqual([[ { data: 1 } ]]);
            });
        });    
        describe('post', () => {
            it('creates a resource ', async () => {
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1}),
                };

                const req = {
                    params:{
                        body : 'request body'
                    }          
                };                

                await users({ axios }).post(req, res);
                expect(res.status.mock.calls).toEqual([[201]]);
                
                expect(res.json.mock.calls).toEqual([[ { data: 1 } ]]);
                expect(axios.post.mock.calls).toEqual([[ 'https://jsonplaceholder.typicode.com/posts/','request body' ]]);
            });
        });   
        describe('patch', () => {
            it('update a resource ', async () => {
                const axios = {
                    patch: jest.fn().mockResolvedValue({ data: 1}),
                };

                const req = {
                    params:{
                        id: 1,
                        body : 'request body'
                    }          
                };                

                await users({ axios }).patch(req, res);
                // console.log(res.sendStatus.mock.calls);

                expect(res.sendStatus.mock.calls).toEqual([[204]]);
                expect(axios.patch.mock.calls).toEqual([[ 'https://jsonplaceholder.typicode.com/posts/1', 'request body']]);
            });
        });
        
        describe('delete', () => {
            it('update a resource ', async () => {
                const axios = {
                    delete: jest.fn().mockResolvedValue({ data: 1}),
                };

                const req = {
                    params:{
                        id: 1
                    }          
                };                

                await users({ axios }).delete(req, res);                

                expect(res.sendStatus.mock.calls).toEqual([[204]]);
                expect(axios.delete.mock.calls).toEqual([[ 'https://jsonplaceholder.typicode.com/posts/1']]);
            });
        }); 
    });
})