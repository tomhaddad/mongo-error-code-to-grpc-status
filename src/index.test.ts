import { test, it } from 'node:test';
import assert from 'node:assert';
import { mongoErrorCodeToGrpcStatus } from '.';

test('mongoErrorCodeToGrpcStatus', async () => {
    await it('should return ALREADY_EXISTS when errorCode is 11000', () => {
        const errorCode = 11000;
        const result = mongoErrorCodeToGrpcStatus(errorCode);
        assert.equal(result, 6);
    })
    await it('should return PERMISSION_DENIED when errorCode is 13', () => {
        const errorCode = 13;
        const result = mongoErrorCodeToGrpcStatus(errorCode);
        assert.equal(result, 7);
    })
    await it('should convert string, and return ABORTED when errorCode is 11600', () => {
        const errorCode = "11600";
        const result = mongoErrorCodeToGrpcStatus(errorCode);
        assert.equal(result, 10);
    })
})