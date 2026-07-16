function formatGenerationError(rawError) {
  if (!rawError) {
    return 'Erreur inconnue lors de la génération.';
  }
  var message = typeof rawError === 'string' ? rawError : (rawError.message || String(rawError));
  if (message.length > 300) {
    message = message.slice(0, 297) + '...';
  }
  return message;
}

module.exports = { formatGenerationError: formatGenerationError };
