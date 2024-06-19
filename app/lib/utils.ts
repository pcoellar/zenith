export const formatRating = (rating: number) => {
    return rating.toFixed(1);
}

export const formatCountK = (count: number) => {
    return parseInt((count / 1000).toFixed(0));
}

export function formatMonthYear(date: Date) {
    // Array of month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // Extract month and year from the Date object
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    // Concatenate the month name and year into a string
    return `${month} ${year}`;
}