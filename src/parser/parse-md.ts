// Define a class for the nodes in the tree
export class Node {
    level: number;
    title: string;
    content: string[];
    children: Node[];

    constructor(level: number, title: string) {
        this.level = level;
        this.title = title;
        this.content = [];
        this.children = [];
    }

    public findChildByName(name: string): Node | null {
        // Check if the current node's title matches the name
        if (this.title === name) {
            return this;
        }
    
        // Recursively check children nodes
        for (const child of this.children) {
            const result = child.findChildByName(name);
            if (result !== null) {
                return result;
            }
        }
    
        // Return null if no matching node is found
        return null;
    }
}


export function parseMarkdown(mdText: string): Node {
    const lines = mdText.split('\n');
    const root = new Node(0, "root");
    const stack: Node[] = [root];

    const headingRegex = /^(#{1,6})\s+(.*)/;

    lines.forEach(line => {
        const match = line.match(headingRegex);

        if (match) {
            const level = match[1].length; 
            const title = match[2].trim();

            const newNode = new Node(level, title);

            while (stack.length > 0 && stack[stack.length - 1].level >= level) {
                stack.pop(); 
            }

            stack[stack.length - 1].children.push(newNode);
            stack.push(newNode); 
        } else {
            if (stack.length > 0) {
                stack[stack.length - 1].content.push(line.trim());
            }
        }
    });

    return root;
}
