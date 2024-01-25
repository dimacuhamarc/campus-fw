interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export function formatDate(date: FirestoreTimestamp): string {
  const timestamp = new Date(date.seconds * 1000 + date.nanoseconds / 1e6);
  timestamp.setHours(timestamp.getHours() + 12);
  const options:Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
  };
  const formattedDate = timestamp.toLocaleDateString('en-PH', options);
  return formattedDate;
}