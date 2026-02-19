import "../globals.css";

export default function AboutLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body>
            <h1>About Layout</h1>
            {children}
            </body>
        </html>
    );
}