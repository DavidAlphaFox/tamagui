import { Switch, YStack } from 'tamagui'

export default function SwitchDemo() {
  return (
    <YStack p="$3" space="$2">
      <Switch size="$1">
        <Switch.Thumb animation="bouncy" />
      </Switch>

      <Switch size="$2">
        <Switch.Thumb animation="bouncy" />
      </Switch>

      <Switch size="$3">
        <Switch.Thumb animation="bouncy" />
      </Switch>

      <Switch size="$4">
        <Switch.Thumb animation="bouncy" />
      </Switch>

      <Switch size="$5">
        <Switch.Thumb animation="bouncy" />
      </Switch>
    </YStack>
  )
}