/**
 * Determines the ID of the most frequently sighted bird type.
 * If there is a tie, returns the smallest ID.
 * @param {number[]} birds - The array of bird type IDs.
 * @returns {number} - The ID of the most frequently sighted bird type.
 */
export function getMostFrequentSighting(birds: number[]): number {
    // if the birds array is empty return -1
    if (!birds.length) {
        console.warn('birds not found');
        return -1;
    }
    const sightingsObject: { [key: number]: number } = {};

    let maxSightings = 0;
    let mostFrequentBirdId = Number.MAX_SAFE_INTEGER;

    // Count occurrences of each bird type ID and track the most frequent bird type
    for (const bird of birds) {
        sightingsObject[bird] = (sightingsObject[bird] || 0) + 1;

        const count = sightingsObject[bird];

        if (count > maxSightings || (count === maxSightings && bird < mostFrequentBirdId)) {
            maxSightings = count;
            mostFrequentBirdId = bird;
        }
    }

    return mostFrequentBirdId;
}

/**
 * Determines the bird type that was first spotted at the latest point in the array.
 * @param {number[]} birds - The array of bird type IDs.
 * @returns {number} - The ID of the bird type that was first spotted at the latest.
 */
export function getLatestFirstSighting(birds: number[]): number {
    // if the birds array is empty return -1
    if (!birds.length) {
        console.warn('Birds not found');
        return -1;
    }
    const firstSeenObject: { [key: number]: number } = {};

    let latestFirstSighting = -1;

    birds.forEach((bird) => {
        if (!firstSeenObject[bird]) {
            firstSeenObject[bird] = bird;
            latestFirstSighting = bird;
        }
    });

    return latestFirstSighting;
}