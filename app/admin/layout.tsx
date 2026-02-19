import "../globals.css";

export default function AdminLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <body>
                <h1>Admin Layout</h1>
                {children}
            </body>
        </html>
    );
}