import "./modal.css";
import { Layer, Box, Heading, Text, Button, Paragraph, Card } from "grommet";
import { Deploy } from "grommet-icons";

export default function Modal(props) {
  return (
    // <Layer animate modal position="center" onClickOutside="hide">
    //   <Box>
    //     <Heading level="3">{props.title}</Heading>
    //     {props.lastPerformed ? (
    //       <Text>Last rented: {props.lastPerformed}</Text>
    //     ) : (
    //       <Text />
    //     )}
    //   </Box>
    //   <Button className="closeModal" onClick={() => props.toggleShow(false)}>
    //     X
    //   </Button>
    //   <Paragraph className="descriptionContainer">{props.desc}</Paragraph>
    // </Layer>

    <Layer animate modal position="center" margin="none" onClickOutside="hide">
      <Box align="center" justify="center" pad="medium">
        <Box align="center" justify="center" gap="none" basis="auto">
          <Heading level="3" textAlign="center" size="small" margin="none">
            Fully Body 1
          </Heading>
          <Text textAlign="center" size="small">
            Last Rented: 2023/11/12
          </Text>
        </Box>
        <Button className="closeModal" onClick={() => props.toggleShow(false)}>
          X
        </Button>
        <Paragraph margin="small">
          This is a short description of the workout.
        </Paragraph>
        <Box
          align="center"
          justify="center"
          pad="xsmall"
          fill="horizontal"
          gap="small"
        >
          <Card
            direction="row"
            fill="horizontal"
            gap="medium"
            pad="small"
            hoverIndicator={false}
            flex
          >
            <Deploy />
            <Text>Exercise 1</Text>
            <Text textAlign="end">4x4</Text>
          </Card>
          <Card
            direction="row"
            fill="horizontal"
            gap="medium"
            pad="small"
            hoverIndicator={false}
            flex
          >
            <Deploy />
            <Text>Exercise 1</Text>
            <Text textAlign="end">4x4</Text>
          </Card>
          <Card
            direction="row"
            fill="horizontal"
            gap="medium"
            pad="small"
            hoverIndicator={false}
            flex
          >
            <Deploy />
            <Text>Exercise 1</Text>
            <Text textAlign="end">4x4</Text>
          </Card>
          <Card
            direction="row"
            fill="horizontal"
            gap="medium"
            pad="small"
            hoverIndicator={false}
            flex
          >
            <Deploy />
            <Text>Exercise 1</Text>
            <Text textAlign="end">4x4</Text>
          </Card>
          <Card
            direction="row"
            fill="horizontal"
            gap="medium"
            pad="small"
            hoverIndicator={false}
            flex
          >
            <Deploy />
            <Text>Exercise 1</Text>
            <Text textAlign="end">4x4</Text>
          </Card>
        </Box>
      </Box>
    </Layer>
    // <div className="modalContainer">
    // </div>
  );
}
