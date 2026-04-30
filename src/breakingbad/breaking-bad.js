/**
 * @returns {Promise<Object|null>}
 */
const fetchQuote = async () => {
  try {
    const response = await fetch(
      "/bb-api/api/breaking-bad/characters"
    );

    console.log("status:", response.status, response.statusText);

    const data = await response.json();
    console.log("payload completo:", data);
    console.table(data?.data ?? []);

    return data;
  } catch (error) {
    console.error("Error en fetchQuote:", error);
    return null;
  }
};

/**
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";
  element.innerHTML = "Loading...";
  await fetchQuote();
};
