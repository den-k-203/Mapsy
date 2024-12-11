import { FC } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import doStore from "../../store/DOStore";
import { observer } from "mobx-react-lite";

interface FilterChartComponentProp {
    period: { start: string; end: string };
    weapon: string;
    place: string;
}

const FilterChartComponent: FC<FilterChartComponentProp> = observer(({ period, weapon, place }) => {
    const { start, end } = period;

    const objects = doStore.destructionObjects
        .filter(obj => {
            const destructionDate = new Date(obj.dateOfDestruction);
            const startDate = new Date(start);
            const endDate = new Date(end);
            return (
                (!start || destructionDate >= startDate) &&
                (!end || destructionDate <= endDate) &&
                (!weapon || obj.whatDestroyed.includes(weapon)) &&
                (!place || obj.neighborhood.includes(place))
            );
        })
        .reduce((acc, obj) => {
            const existing = acc.find(item => item.name === obj.typeInfrastructure);
            if (existing) {
                existing.count_objects += 1;
            } else {
                acc.push({ name: obj.typeInfrastructure, count_objects: 1 });
            }
            return acc;
        }, [] as { name: string; count_objects: number }[]);

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', color: 'black' }}>
                    <p>{`Назва об'єкта: ${payload[0].payload.name}`}</p>
                    <p>{`Кількість об'єктів: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            {objects.length === 0 ? (
                <div className="do-empty" style={{ width: "max-content", margin: "auto", fontSize: "20px" }}>
                    Інформація відстутня
                </div>
            ) : (
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        width={50}
                        height={300}
                        data={objects}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="count_objects" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </>
    );
});

export default FilterChartComponent;
