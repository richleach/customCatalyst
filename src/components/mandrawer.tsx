import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridRound2Plus, faBookmark, faChevronRight, faChevronDown, faChevronUp, faMagnifyingGlass, faHouse, faHandshake, faClipboardCheck, faChartMixedUpCircleDollar, faCalendarDay, faArrowUpRightFromSquare, faArrowRightArrowLeft } from "@fortawesome/pro-solid-svg-icons";

export default function Mandrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Right Drawer" position="right">
        {/* Drawer content */}
        This is my drawer content, there are many like it but this drawer is mine.
      </Drawer>

      <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={open}/>
    </>
  );
}