import supabase from "./supabaseClients";

type UserInfo = {
  data: any;
  error: any;
};

export const signInWithEmail = async (email: string, password: string): Promise<UserInfo> => {
  try {
    let { data, error }: { data: any; error: any } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Check if 'error' is not null or undefined
    if (error) {
      console.error('Sign in error:', error.message);
      return { data: null, error };
    } else {
      console.log('User signed in successfully');
      return { data, error: null };
    }
  } catch (error: any) {
    console.error('Sign in error:', error.message);
    return { data: null, error: error.message };
  }
};

export const signUpWithEmail = async (email: string, password: string): Promise<UserInfo> => {
  try {
    let { data, error }: { data: any; error: any } = await supabase.auth.signUp({
      email,
      password,
    });

    // Check if 'error' is not null or undefined
    if (error) {
      console.error('Sign up error:', error.message);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { data: null, error };
    } else {
      console.log('User signed up successfully');
      return { data, error: null };
    }
  } catch (error: any) {
    console.error('Sign up error:', error.message);
    return { data: null, error: error.message };
  }
};
