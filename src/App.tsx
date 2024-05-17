import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="flex items-center justify-center h-screen">
        <Button variant={"outline"}>Hello World</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
