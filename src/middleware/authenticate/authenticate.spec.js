import { authenticate } from './authenticate.js';

describe('Middleware', ()=> {
    describe('Authenticate', () => {
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

        it('Should have id 1', () => {
            const req = {
                header: jest.fn().mockReturnValue(1)
            };

            authenticate(req, res, next);
            expect(req.header.mock.calls).toEqual([
                ['userId']
            ]);
            expect(res.sendStatus.mock.calls).toEqual([ ]);
            expect(next.mock.calls).toEqual([[]]);
        });

        it('it should fail is user not the one with 1', () => {
            const req = {
                header: jest.fn().mockReturnValue(2)
            };

            authenticate(req, res, next);
            expect(req.header.mock.calls).toEqual([
                ['userId']
            ]);
            expect(res.sendStatus.mock.calls).toEqual([[403]]);
            expect(next.mock.calls).toEqual([]);
        });
    });
});
