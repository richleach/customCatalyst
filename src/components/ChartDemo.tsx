import { BarChart } from '@mantine/charts';
import { data } from './ChartDemoData';

export default function ChartDemo() {
    return (
        <BarChart
            style={{marginTop:"10px", marginBottom:"10px"}}
            h={300}
            data={data}
            dataKey="month"
            type="stacked"
            orientation="vertical"
            yAxisProps={{ width: 80 }}
            series={[
                { name: 'SuperSteel', color: 'violet.6' },
                { name: 'BigBertha', color: 'blue.6' },
                { name: 'HeavyBevy', color: 'teal.6' },
            ]}
        />
    );
}