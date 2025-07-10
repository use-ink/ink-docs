// Import the shared tutorials data
// @ts-ignore
import tutorialsData from './tutorialsData.js';

export const tutorials = tutorialsData.map(tutorial => ({
  ...tutorial,
  link: `docs/${tutorial.link}`,
}));