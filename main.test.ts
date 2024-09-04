import { getMostFrequentSighting, getLatestFirstSighting } from './main';

describe('getMostFrequentSighting', () => {
    test('should return the most frequent bird ID', () => {
        const birds = [1, 2, 2, 3];
        const result = getMostFrequentSighting(birds);
        expect(result).toBe(2);
    });

    test('should return the smallest bird ID if there is a tie', () => {
        const birds = [2, 2, 3, 3, 1, 1];
        const result = getMostFrequentSighting(birds);
        expect(result).toBe(1);
    });

    test('should handle arrays with a single element', () => {
        const birds = [4];
        const result = getMostFrequentSighting(birds);
        expect(result).toBe(4);
    });

    test('should handle arrays with no elements', () => {
        const birds: any[] = [];
        const result = getMostFrequentSighting(birds);
        expect(result).toBe(-1);
    });

    test('should handle arrays with all unique elements', () => {
        const birds = [5, 6, 7];
        const result = getMostFrequentSighting(birds);
        expect(result).toBe(5);
    });
});

describe('getLatestFirstSighting', () => {
    test('should return the latest first sighting bird ID', () => {
        const birds = [1, 1, 2, 3, 2];
        const result = getLatestFirstSighting(birds);
        expect(result).toBe(3);
    });

    test('should handle arrays with a single element', () => {
        const birds = [7];
        const result = getLatestFirstSighting(birds);
        expect(result).toBe(7);
    });

    test('should handle arrays with no elements', () => {
        const birds: any[] = [];
        const result = getLatestFirstSighting(birds);
        expect(result).toBe(-1);
    });

    test('should handle arrays with all unique elements, with unique elements', () => {
        const birds = [3, 4, 5, 2, 1];
        const result = getLatestFirstSighting(birds);
        expect(result).toBe(1);
    });

    test('should handle arrays where the first sighting is the last element', () => {
        const birds = [2, 2, 2, 4];
        const result = getLatestFirstSighting(birds);
        expect(result).toBe(4);
    });
});
