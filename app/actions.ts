'use server';

export const joinWaitlist = async (email: string) => {
  const apiKey = process.env.SUPABASE_API_KEY;
  const endpoint = `${process.env.SUPABASE_FUNCTION_URL}/join-waitlist`;

  if (!apiKey) {
    console.error('Supabase API key is not configured.');
    return { error: 'Server configuration error.' };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${apiKey}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: response.statusText }));
      console.error('Error joining waitlist:', errorData);
      return { error: errorData.error || 'Something went wrong on the server.' };
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error joining waitlist:', error);
    return { error: 'An unexpected error occurred.' };
  }
}; 