import { Button } from '@/components/ui/button/button';
import { Checkbox } from '@/components/ui/checkBox/checkBox';

function App() {
  return (
    <>
      <h1 className="text-4xl text-purple-700">Tailwind ui-kit </h1>
      <div>
        <Button variant="outline">ui-kit button</Button>
      </div>
      <div>
        <Checkbox title="ui-kit checkbox"></Checkbox>
      </div>
    </>
  );
}

export default App;
