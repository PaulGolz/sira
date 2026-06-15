/**
 * Rendert strukturierte Daten (JSON-LD) als <script>-Tag.
 * Wird serverseitig in das HTML eingebettet.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON wird serverseitig serialisiert; kein User-Input enthalten.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
