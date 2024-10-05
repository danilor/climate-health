import gpm
import datetime
import os


def create_config():

    username_pps = "japstrash@gmail.com"
    password_pps = "japstrash@gmail.com"
    username_earthdata = "blackhole"
    password_earthdata = "O!xb&kt#4kTcAKEn"
    base_dir = "C:/Virtual/NASA/data>"
    gpm.define_configs(
        username_pps=username_pps,
        password_pps=password_pps,
        username_earthdata=username_earthdata,
        password_earthdata=password_earthdata,
        base_dir=base_dir,
    )

def check_configuration():
    """
    For MacOS the config file need to be in home directory
    For Windows needs to be in c:/Users/<username>
    """
    configs = gpm.read_configs()
    print(configs)


def check_ports():
    from gpm.io.download import check_pps_ports_are_open
    check_pps_ports_are_open()

def download_data():
    product = "2A-DPR"
    product_type = "RS"
    version = 7
    storage = "PPS"  # or "GES_DISC"

    start_time = datetime.datetime(2020, 7, 22, 1, 10, 11)
    end_time = datetime.datetime(2020, 7, 22, 2, 30, 5)

    # Download data over specific time periods
    gpm.download(
        product=product,
        product_type=product_type,
        version=version,
        start_time=start_time,
        end_time=end_time,
        storage=storage,
    )

def open_data_set():
    product = "2A-DPR"
    product_type = "RS"
    version = 7
    storage = "PPS"  # or "GES_DISC"
    start_time = datetime.datetime(2020, 7, 22, 1, 10, 11)
    end_time = datetime.datetime(2020, 7, 22, 1, 40, 5)
    ds = gpm.open_dataset(
    product=product,
    product_type=product_type,
    version=version,
    start_time=start_time,
    end_time=end_time,
    )

    # Plot a specific variable of the dataset
    ds["precipRateNearSurface"].gpm.plot_image()

# print(gpm.available_products(product_levels="2A"))


filepath = os.path.normpath("C:/Users/Jose Porras/Documents/Personal/Trainings/NASA/docs/GPM/RS/V07/RADAR/2A-DPR/2020/07/22/2A.GPM.DPR.V9-20211125.20200722-S005342-E022617.036346.V07A.HDF5")
print(filepath)
ds = gpm.open_granule(filepath)
print(ds)
print(ds["precipRateNearSurface"])
# ds["precipRateNearSurface"].gpm.plot_image()
