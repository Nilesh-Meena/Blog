import Link from "next/link";

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/userAuthToWrite", {
      cache: "no-store",
    });

    if (!response.ok) {
      // If the response status is not okay, handle the error
      if (response.status === 401) {
        // User is not authenticated
        return { role: null };
      }

      throw new Error(`Failed with status ${response.status}`);
    }

    const result = await response.json();
    // console.log("Data:", result);
    return result;
  } catch (error) {
    console.log("Error fetching user data:", error);
    throw error;
  }
};

const AuthButton = async () => {
  const data = await getData();
  // console.log(data);
  const isAuthor = data.role === "Author";
  // console.log(isAuthor);

  if (isAuthor) {
    return (
      <Link
        href="/Subscribe"
        className={`hidden font-TWMedium font-bold dark:bg-black dark:active:shadow-none dark:text-white sm:block transition-[0.2s] px-6 py-2 rounded 
            
          border border-solid dark:border-white border-black  translate-x-[-0.25rem] translate-y-[-0.25rem] shadow-[0.25rem_0.25rem_rgba(0,0,0)] dark:shadow-[0.25rem_0.25rem_rgba(255,255,255)] active:translate-x-0 active:shadow-none`}
      >
        Write
      </Link>
    );
  }
};

export default AuthButton;
