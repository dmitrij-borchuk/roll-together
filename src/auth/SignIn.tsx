import { Text, Paper, Group, PaperProps, Box } from '@mantine/core'
import { GoogleButton } from './SocialButtons'

export function AuthenticationForm(props: PaperProps) {
  return (
    <Box
      pt={40}
      sx={{
        maxWidth: 420,
      }}
      m="auto"
    >
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Roll Together, login with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>
      </Paper>
    </Box>
  )
}
