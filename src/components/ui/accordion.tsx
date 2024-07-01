"useclient";
import * as Accordion from '@radix-ui/react-accordion';

export default function MyAccordion() {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger>Item 1</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          <p>Conteúdo do Item 1</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger>Item 2</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          <p>Conteúdo do Item 2</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
