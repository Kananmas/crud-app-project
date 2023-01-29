import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  let [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select();

      if (error) {
        throw new Error(error.message);
      }
      if (data) {
        setSmoothies(data);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div>
      {smoothies &&
        smoothies.map((i) => {
          return (
            <div>
              {i.id} {i.title} {i.created_at} {i.method} {i.rating}
            </div>
          );
        })}
    </div>
  );
}
