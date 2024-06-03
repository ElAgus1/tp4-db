"use server";
import supabase from "../lib/supabase";

// obtiene valor inicial de la db
const fetchData = async () => {
  const { data, error } = await supabase
    .from("number")
    .select("valor")
    .eq("id", 1)
    .single();
  if (error) {
    console.error("Error fetching data:", error);
    return { valor: 0 }; // Valor por defecto
  }
  return data;
};

// actualiza datos en db
const updateData = async (newValue: number) => {
  const { data, error } = await supabase
    .from("number")
    .update({ valor: newValue })
    .eq("id", 1);
  if (error) {
    console.error("Error updating data:", error);
  }
  return data;
};

export { fetchData, updateData };
