import supabase from "./supabaseClients";

type UserInfo = {
  user: any;
  session: any;
  error: any;
};

export const signInWithEmail = async (email: string, password: string): Promise<UserInfo> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error.message);
      return { user: null, session: null, error };
    }
    console.log('User signed in successfully:', data);
    return { user: data.user, session: data.session, error: null };
  } catch (error: any) {
    console.error('Sign in error:', error.message);
    return { user: null, session: null, error: error.message };
  }
};

export const signUpWithEmail = async (email: string, password: string): Promise<UserInfo> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      if (error.message.includes('rate limit')) {
        console.error('Rate limit error:', error.message);
        alert('You have exceeded the sign-up rate limit. Please try again later.');
      } else {
        console.error('Sign up error:', error.message);
      }
      return { user: null, session: null, error };
    }
    console.log('User signed up successfully:', data);
    return { user: data.user, session: data.session, error: null };
  } catch (error: any) {
    if (error.message.includes('rate limit')) {
      console.error('Rate limit error:', error.message);
      alert('You have exceeded the sign-up rate limit. Please try again later.');
    } else {
      console.error('Sign up error:', error.message);
    }
    return { user: null, session: null, error: error.message };
  }
};
