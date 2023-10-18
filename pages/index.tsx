
import { TextInput, Checkbox, Button, Group, Box, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function IndexPage() {
  const form = useForm({
    initialValues: {
      number: '',
    }
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <NumberInput {...form.getInputProps('number')}/>
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}