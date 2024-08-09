import jwt from 'jsonwebtoken';

function verifyToken(token: string, secret: string): any {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error('Invalid token');
    }
}
