'use strict';

const mongoErrorCodeToGrpcStatus = (errorCode) => {
    switch (errorCode) {
        case 11000: // DuplicateKey
            return 6; // ALREADY_EXISTS
        case 13: // Unauthorized
            return 7; // PERMISSION_DENIED
        case 11600: // Interrupted
        case 11601: // InterruptedAtShutdown
        case 11602: // InterruptedDueToReplStateChange
            return 10; // ABORTED
        case 6: // HostUnreachable
        case 7: // HostNotFound
        case 89: // NetworkTimeout
            return 14; // UNAVAILABLE
        default:
            return 13; // INTERNAL
    }
  }
  

export default mongoErrorCodeToGrpcStatus;