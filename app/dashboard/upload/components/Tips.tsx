import { Card } from "@/app/components/ui/Card"

export default function Tips() {

    return (
        <Card className="py-10">
            <h4 className="font-medium mb-2 lg:text-lg">Tips for better results:</h4>
            <ul className="text-sm lg:text-base text-ci-muted space-y-1 px-4">
                <li>• Ensure the receipt is well-lit and all text is visible</li>
                <li>• Avoid shadows and reflections</li>
                <li>• Keep the receipt flat and straight</li>
                <li>• Include the entire receipt from top to bottom</li>
            </ul>
        </Card>
    )
}