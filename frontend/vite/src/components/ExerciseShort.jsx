import { Card, Text } from "grommet";
import { Deploy } from "grommet-icons";

export default function ExerciseShort(props) {
  return (
    <Card
      direction="row"
      fill="horizontal"
      gap="medium"
      pad="small"
      hoverIndicator={true}
    >
      <Deploy style={{ flex: 1 }} />
      <Text style={{ flex: 4 }}>{props.title}</Text>
      <Text textAlign="end" style={{ flex: 1 }}>
        {props.sets}x{props.reps}
      </Text>
    </Card>
  );
}
