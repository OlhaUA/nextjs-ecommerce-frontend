export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_18B77F078BEA03F7';

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STRIPE_PK ||
  'pk_test_51IflZbJsJiUjgHtN3JxjD7AcRipe5vn4kbTOO0TN5lSoYSFhcltvq65LDJh97oL9cvjRbGh1UnEoP8vAbxJ7G3Fo00QxTDJWty';

export const fromImageToUrl = (image) => {
  if (!image) {
    return '/vercel.svg';
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
