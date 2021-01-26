import reducer from './auth';
import * as actions from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            authRedirectPath: "/"
        });
    });

    if('should store token uppon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            authRedirectPath: "/"
        }, { 
            type: actions.AUTH_SUCCESS, 
            idToken: 'some-token', 
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            loading: false,
            error: null,
            authRedirectPath: "/"
        });
    });
})