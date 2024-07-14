import supabase from "./supabaseClients";

type UserInfo = {
  data: any;
  error: any;
};

export const signInWithEmail = async (email: string, password: string): Promise<UserInfo> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Check if 'error' is not null or undefined
   if(error){
     console.error('Sign in error:', error.message);
     return { data: null, error };
    } 
    alert('User signed in successfully');
     return{ data: null, error}
 
  } catch (error: any) {
    console.error('Sign in error:', error.message);
    return { data: null, error: error.message };
  }};

export const signUpWithEmail = async (email: string, password: string): Promise<UserInfo> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    // Check if 'error' is not null or undefined
    if (error) {
      console.error('Sign up error:', error.message);
      return { data: null, error };
    } 
      alert('User signed up successfully');
      return { data, error: null };

  } catch (error: any) {
    console.error('Sign up error:', error.message);
    return { data: null, error: error.message };
  }
};
