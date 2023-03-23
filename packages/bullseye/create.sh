#!/bin/bash -ex

function help(){
  echo ""
  echo "== Help =="
  echo ""
  echo "  -p  --  Pubkey               [ABCD1234]       (REQUIRED) "
  echo "  -c  --  Codename             [stable/testing] (OPTIONAL) "
  echo "  -C  --  Components           [main/contrib]   (OPTIONAL) "
  echo "  -a  --  Architecture         [armhf/amd64]    (OPTIONAL) "
  echo ""
  
  exit 1
}

if [ $(which gpg >/dev/null) ]; then
  echo "== GPG utility not found =="
  exit 1
fi

while getopts "hc:C:a:p:" opt; do
  case $opt in
    c)
      echo "== Codename: ${OPTARG} =="
      CODENAME=${OPTARG}
      ;;
    C)
      echo "== Components: ${OPTARG} =="
      COMPONENTS=${OPTARG}
      ;;
    a)
      echo "== Architectures: ${OPTARG} =="
      ARCHITECTURES=${OPTARG}
      ;;
    p)
      echo "== Pubkey: ${OPTARG} =="
      PUBKEY=${OPTARG}
      ;;
    h)
      help
      ;;
    \?)
      echo "== Invalid option: -$OPTARG ==" >&2
      help
    ;;
  esac
done

# Set defaults
[ -z ${CODENAME} ] && CODENAME="stable"
[ -z ${COMPONENTS} ] && COMPONENTS="main"
[ -z ${ARCHITECTURE} ] && ARCHITECTURE="armhf"

# Error if no pubkey
[ -z ${PUBKEY} ] && echo "== No Pubkey specified ==" && help

# Error if pubkey doesn't exist
VERIFY=$(gpg --list-keys | grep -o ${PUBKEY})
if [ -z ${VERIFY} ]; then
 echo "== Specified Pubkey ${PUBKEY} not found =="
 help
fi

# Create
mkdir conf
touch conf/distributions
echo "Codename: ${CODENAME}" > conf/distributions
echo "Components: ${COMPONENTS}" >> conf/distributions
echo "Architectures: ${ARCHITECTURE}" >> conf/distributions
echo "SignWith: ${PUBKEY}" >> conf/distributions

# Export pubkey
gpg --armor --output public.key --export ${PUBKEY}
