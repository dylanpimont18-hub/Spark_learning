function shouldClaim(sessionData, now) {
  if (!sessionData || sessionData.generationStatus !== 'generating') {
    return false;
  }
  var lockAt = sessionData.generationLockAt;
  if (!lockAt) {
    return true;
  }
  var lockMillis = typeof lockAt.toMillis === 'function' ? lockAt.toMillis() : new Date(lockAt).getTime();
  var ageMs = now.getTime() - lockMillis;
  return ageMs >= 10 * 60 * 1000;
}

module.exports = { shouldClaim: shouldClaim };
