echo "Enter the year: "
read year

echo "Enter the day: "
read day

if [ $year -eq $(date +%Y) ]; then
    mkdir $day
    cp template/* $day
    cd $day
    exit
fi

mkdir $year/$day
cp template/* $year/$day
cd $year/$day


