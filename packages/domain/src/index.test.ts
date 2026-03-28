import { describe, expect, it } from 'vitest';
import * as domain from './index.js';

describe('charachat domain module', () => {
    it('loads as a valid runtime module', () => {
        expect(domain).toBeTypeOf('object');
    });
});
