import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ArmyBodyFatArticle = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Understanding Army Body Fat Standards</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-sm max-w-none">
        <p>
          The Army Body Fat Calculator is based on the Army Body Fat Assessment for the Army Body
          Composition Program, published on June 12, 2023. To ensure accuracy, take the average of at least
          three measurements and round to the nearest pound or 0.5 inch.
        </p>

        <h3>Maximum Allowable Percent Body Fat Standards</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>Age</th>
              <th>Male</th>
              <th>Female</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>17-20</td>
              <td>20%</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>21-27</td>
              <td>22%</td>
              <td>32%</td>
            </tr>
            <tr>
              <td>28-39</td>
              <td>24%</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>40 and over</td>
              <td>26%</td>
              <td>36%</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default ArmyBodyFatArticle;
