import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <div className="m-4 flex flex-col gap-5">
        <h1 className="text-3xl font-medium">Button</h1>
        <p>
          A button is a widget that enables users to trigger an action or event,
          such as submitting a form, opening a dialog, canceling an action, or
          performing a delete operation.
        </p>

        <hr className="opacity-20" />

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Default</h2>
          <div className="border border-[#e5e5e5] rounded-lg p-3 bg-[#fbfbfb] flex gap-2">
            <Button>default</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Colors</h2>
          <div className="border border-[#e5e5e5] rounded-lg p-3 bg-[#fbfbfb] flex gap-2">
            <Button colors={"default"}>default</Button>
            <Button colors={"primary"}>primary</Button>
            <Button colors={"destructive"}>destructive</Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Variants</h2>
          <div className="border border-[#e5e5e5] rounded-lg p-3 bg-[#fbfbfb] flex flex-col gap-2">
            <div className="flex gap-2">
              <Button colors={"default"} variant={"flat"}>
                flat
              </Button>
              <Button colors={"default"} variant={"solid"}>
                solid
              </Button>
              <Button colors={"default"} variant={"outline"}>
                outline
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colors={"primary"} variant={"flat"}>
                flat
              </Button>
              <Button colors={"primary"} variant={"solid"}>
                solid
              </Button>
              <Button colors={"primary"} variant={"outline"}>
                outline
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colors={"destructive"} variant={"flat"}>
                flat
              </Button>
              <Button colors={"destructive"} variant={"solid"}>
                solid
              </Button>
              <Button colors={"destructive"} variant={"outline"}>
                outline
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl font-medium">Sizes</h2>
          <div className="border border-[#e5e5e5] rounded-lg p-3 bg-[#fbfbfb] flex gap-2">
            <Button colors={"primary"} size={"sm"}>
              sm
            </Button>
            <Button colors={"primary"} size={"md"}>
              mg
            </Button>
            <Button colors={"primary"} size={"lg"}>
              lg
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
